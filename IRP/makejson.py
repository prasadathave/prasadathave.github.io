import csv
import json

def make_json(csvFilePath, jsonFilePath):

    data = {}
    
    with open(csvFilePath, encoding='utf-8') as csvf:
        csvReader = csv.DictReader(csvf)
		
        for rows in csvReader:
			
			# Assuming a column named 'No' to
			# be the primary key
            key = rows['Sr.No.']
            data[key] = rows

    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf:
        jsonf.write(json.dumps(data, indent=4))

csvFilePath = r"./static/sheets/IBP2021b.csv"
jsonFilePath = r'./static/json/IBP2021b.json'

# Call the make_json function
make_json(csvFilePath, jsonFilePath)
