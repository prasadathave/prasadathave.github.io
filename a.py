import pandas as pd


csvFilePath = r"./static/sheets/IP2021.csv"
outpath = r"./static/sheets/IP2021a.csv"

d = pd.read_csv(csvFilePath)
d.fillna(method='ffill', inplace=True)
d.to_csv(outpath, index=False)


