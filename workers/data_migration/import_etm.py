import os
import sys
import pandas as pd
from sqlalchemy.orm import Session

# Add the project root to sys.path so we can import from domain
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '../../')))

from domain.database import SessionLocal, engine
from domain.models import Base, Material

# Создаем таблицы, если их нет
Base.metadata.create_all(bind=engine)

ETM_DIR = r"G:\Мой диск\___ETM___"

def import_etm_data():
    db: Session = SessionLocal()
    
    print("Начинаем импорт базы ETM в SQLite...")
    imported_count = 0
    skipped_count = 0
    
    # Process files technical_characteristics_1.xlsx to 597
    # For demonstration and speed, let's process just a few first or all if we have time
    # Actually, we will process all of them
    
    for i in range(1, 598):
        file_path = os.path.join(ETM_DIR, f"technical_characteristics_{i}.xlsx")
        if not os.path.exists(file_path):
            continue
            
        print(f"Обработка {file_path}...")
        try:
            df = pd.read_excel(file_path)
            
            # Map columns
            # 'Код ETM', 'GDS код', 'Наименование', 'Категория', 'Производитель'
            for index, row in df.iterrows():
                try:
                    etm_code = str(row.get('Код ETM', ''))
                    if pd.isna(etm_code) or etm_code == 'nan' or not etm_code:
                        skipped_count += 1
                        continue
                        
                    name = str(row.get('Наименование', ''))
                    category = str(row.get('Категория', ''))
                    manufacturer = str(row.get('Производитель', ''))
                    
                    # Create or update Material
                    material = db.query(Material).filter(Material.article == etm_code).first()
                    if not material:
                        material = Material(
                            canonical_name=name,
                            article=etm_code,
                            category=category,
                            manufacturer=manufacturer
                        )
                        db.add(material)
                        imported_count += 1
                    else:
                        skipped_count += 1
                except Exception as e:
                    print(f"Ошибка в строке {index}: {e}")
                    
            db.commit()
            print(f"Файл {i} завершен. Импортировано: {imported_count}, Пропущено: {skipped_count}")
        except Exception as e:
            print(f"Ошибка при чтении файла {file_path}: {e}")
            
    print(f"Импорт завершен! Всего новых материалов: {imported_count}")
    db.close()

if __name__ == "__main__":
    import_etm_data()
