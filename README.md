# Stroke Prediction

## Deliverable 1

Slides:
https://docs.google.com/presentation/d/1T1olflH12lzSqILTFJWoFIN8zBhSiSef2Qs52ikFzmE/edit?usp=sharing

### Topic

We picked a dataset of patient stroke data found on Kaggle: [Stroke Prediction Dataset](https://www.kaggle.com/datasets/fedesoriano/stroke-prediction-dataset)

From a data analyst student perspective, we were provided with a robust, relatively clean set of data covering 10 characteristics of over 5,000 individuals, which should give us plenty of useful information to work with.

From a real world perspective, obviously strokes are a very serious issue.  According to the CDC's [Stroke Facts](https://www.cdc.gov/stroke/facts.htm), nearly 800,000 strokes occur in the United States on an annual basis.  Of those, there is approximately a 15% 30-day mortality rate.  Even for people who survive, many can be left with either very long roads to recovery or ultimately serious long-term disability.  By helping to uncover what factors are more likely to lead to strokes, we ultimately hope to help people avoid them in the first place.

### Description of Data

This data shows demographic and health information about 5,100 patients and whether or not they had a stroke. The demographic information is age, marital status, gender, work type and residence type. Health information is hypertension, heart disease, blood sugar, bmi and whether or not they smoke. In the data set a 1 indicates the patient has had a stroke and a 0 indicates they have not had a stroke.

### Questions to Answer
* Given the information we have started with, can we create a machine learning program which accurately predicts which people have had a stroke (or are likely to)?
* Which factors have a statistically significant correlation on the result of having a stroke, and what is that correlation?
* Do some factors correlate more with having a stroke than others?

### Communication Process

In addition to divvying up main responsibilities and setting up our GitHub repository with separate branches, we set up a few plans for communication.  We established a Slack group chat for quick and easy communication and the sharing of information.  We also made plans for a Zoom chat on Sunday go over things and make sure everything is in order before we submit our progress so far.


## Deliverable 2

### Exploratory Data
Out of the 5100 rows, 201 rows were dropped with null BMIs and the one with other Gender.  There were 1483 rows with unknown Smoking, but we didn't want to eliminate 1/3rd of the dataset. All ages were rounded to a whole number. 

When we did the machine learning model, the first time, it was predicting if a patient would not have a stroke. The confusion matrix wasn't intuitive and a little confusing. We wanted the analysis to predict the likelihood of a stroke. To make the machine learning results less confusing we changed the original dataset to reflect 1 as stroke and 0 as no stroke. 

### Splitting Data
We used the train_test_split function of sklearn to create training and testing data. We used the default settings for the function that uses 70% for the training set and 30% for the testing set.

### Machine Learning Model
We chose to use supervised machine learning because our data has a discrete outcome. Whether or not a patient had a stroke given certain characteristics. The machine learning model that had the most success predicting stroke results was the naive random oversampling model. It made the correct prediction 76% of the time vs. all of the other models we tried which were correct (50% to 74%) of the time.

![]()
![]()
![]()
![]()


## Deliverable 3

## Deliverable 4

