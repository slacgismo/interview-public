import csv
import random
import string

headers = [''.join(random.choices(string.ascii_lowercase, k=5)) for _ in range(3)]
rows = [[random.randint(1, 100) for _ in range(3)] for _ in range(3)]

with open('file2.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerow(headers)
    writer.writerows(rows)
