import sqlite3
conn = sqlite3.connect('pto_intelligence_v2.db')
print("Completed docs:", conn.execute("SELECT COUNT(1) FROM documents WHERE status='completed'").fetchone()[0])
