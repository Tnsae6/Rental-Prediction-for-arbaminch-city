import pickle
import numpy as np
import pandas as pd
import time


model = pickle.load(open("pune_rent.pkl", 'rb'))
data = pd.read_csv('Cleaned_data.csv')


seller_list = sorted(data['seller_type'].unique())
localities = sorted(data['locality'].unique())
prop_list = sorted(data['property_type'].unique())
furnish_list = sorted(data['furnish_type'].unique())
layout_list = sorted(data['layout_type'].unique())
bed_list = sorted(data['bedroom'].unique())
bath_list = sorted(data['bathroom'].unique())

def predict_price(seller, bedroom, bhk, prop, locality, area, furnish, bathroom):
    # input = np.array([[seller, bedroom, bhk, prop, locality, area, furnish, bathroom]]).astype(np.float64)
    input = pd.DataFrame([[seller, bedroom, bhk, prop, locality, area, furnish, bathroom]], columns=[
                         'seller_type', 'bedroom', 'layout_type', 'property_type', 'locality', 'area', 'furnish_type', 'bathroom'])
    prediction = model.predict(input)
    return float(prediction)

print(predict_price("OWNER", 1 , 'BHK', 'Apartment', 'Limat', 1000, 'Unfurnished', 2))

