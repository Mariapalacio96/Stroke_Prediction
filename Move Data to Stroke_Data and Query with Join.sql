
INSERT INTO stroke_data
SELECT * FROM stroke_clean;

CREATE TABLE results(
id varchar,
y_test int,
y_pred int)



INSERT INTO results
SELECT * FROM prediction_results;


SELECT sc.ID,
sc.Gender,
sc.Age,
sc.Hypertension,
sc.HeartDisease,
sc.EverMarried,
sc.Work,
sc.Residence,
sc.Glucose,
sc.BMI,
sc.Smoking,
sc.Stroke,
r.y_pred
FROM stroke_data as sc
JOIN results as r
ON sc.id = r.id;