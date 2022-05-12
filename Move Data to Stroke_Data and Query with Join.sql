
INSERT INTO stroke_data
SELECT * FROM stroke_clean;

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
pr.y_pred
FROM stroke_data as sc
JOIN prediction_results as pr
ON sc.id = pr.id;