CREATE TABLE prediction_results(
ID varchar PRIMARY KEY,
y_test int,
y_pred int);

SELECT * FROM prediction_results
SELECT * FROM stroke_data

DELETE FROM prediction_results;
DELETE FROM stroke_data;

SELECT sd.ID,
sd.Gender,
sd.Age,
sd.Hypertension,
sd.HeartDisease,
sd.EverMarried,
sd.Work,
sd.Residence,
sd.Glucose,
sd.BMI,
sd.Smoking,
sd.Stroke,
pr.y_pred
FROM stroke_data as sd
JOIN prediction_results as pr
ON sd.ID = pr.id;