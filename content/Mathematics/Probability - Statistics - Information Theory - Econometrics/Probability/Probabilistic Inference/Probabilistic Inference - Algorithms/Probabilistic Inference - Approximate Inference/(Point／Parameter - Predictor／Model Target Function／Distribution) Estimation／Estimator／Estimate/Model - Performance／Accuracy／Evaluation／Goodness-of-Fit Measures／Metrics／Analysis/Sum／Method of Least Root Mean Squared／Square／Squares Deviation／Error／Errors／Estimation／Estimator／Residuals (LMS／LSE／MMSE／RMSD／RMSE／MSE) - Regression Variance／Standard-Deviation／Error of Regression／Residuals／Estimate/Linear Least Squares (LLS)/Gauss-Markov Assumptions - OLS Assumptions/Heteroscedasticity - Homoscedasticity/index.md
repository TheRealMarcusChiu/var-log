---
publish: true
title: Heteroscedasticity - Homoscedasticity
created: 2021-09-13T05:27:45.070-05:00
modified: 2021-09-13T05:27:45.070-05:00
---

given an [[(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate|estimator/model]] ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) that predicts an output 𝑦 when given a set of inputs {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}:

- 𝑦̂ = ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) <font style="color: rgb(128,128,128);"># e.g. a linear regression model 𝑦̂ = 𝜃<sub>0</sub> + 𝜃<sub>1</sub>·𝑥<sub>1</sub> + ... + 𝜃<sub>𝑘</sub>·𝑥<sub>𝑘</sub></font>

the estimator/model ℎ(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) is either:

- <strong>homoscedastic</strong> when 𝑉𝑎𝑟(<font style="color: rgb(51,102,255);">𝑒𝑟𝑟𝑜𝑟</font>|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = a constant 𝛿<sub>0</sub> independent of inputs {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}
- <strong>heteroscedastic</strong> when 𝑉𝑎𝑟(<font style="color: rgb(51,102,255);">𝑒𝑟𝑟𝑜𝑟</font>|𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) = some function 𝑓(𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>) dependent on inputs {𝑥<sub>1</sub>, ..., 𝑥<sub>𝑘</sub>}

where:

- [[Sum／Method of Least Root Mean Squared／Square／Squares Deviation／Error／Errors／Estimation／Estimator／Residuals (LMS／LSE／MMSE／RMSD／RMSE／MSE) - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate|𝑒𝑟𝑟𝑜𝑟 = distance between 𝑦̂ and 𝑦]]

### Residual Plot Examples (see [[Residual Plot - Partial Residual Plot|residual plots]])

![[Mathematics/Probability - Statistics - Information Theory - Econometrics/Probability/Probabilistic Inference/Probabilistic Inference - Algorithms/Probabilistic Inference - Approximate Inference/(Point／Parameter - Predictor／Model Target Function／Distribution) Estimation／Estimator／Estimate/Model - Performance／Accuracy／Evaluation／Goodness-of-Fit Measures／Metrics／Analysis/Sum／Method of Least Root Mean Squared／Square／Squares Deviation／Error／Errors／Estimation／Estimator／Residuals (LMS／LSE／MMSE／RMSD／RMSE／MSE) - Regression Variance／Standard-Deviation／Error of Regression／Residuals／Estimate/Linear Least Squares (LLS)/Gauss-Markov Assumptions - OLS Assumptions/Heteroscedasticity - Homoscedasticity/homoscedasticity-heteroscedasticity.png|700]]

### Hetero/Homo Scedasticity - Tests

statistical tests for whether there is heteroscedasticity or homoscedasticity

- [[Hetero／Homo Scedasticity - Tests|Hetero/Homo Scedasticity - Tests]]

### False Heteroscedasticity (Heteroscedasticity not caused by Population Heteroscedasticity)

finding heteroscedastic errors does not mean it is true population heteroscedasticity, it could mean your model is missing an important input variable. A variable that correlates with one of the model independent variables

- [[Heteroscedasticity as a Symptom of Omitted Variable Bias]]

### Dealing With Heteroscedasticity in Least Squares Estimators

heteroscedasticity breaks one of the [[Gauss-Markov Assumptions - OLS Assumptions]] and also causes [[Ordinary Least Squares (OLS)|OLS]] to no longer become the best linear estimator [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)|BLUE]]

- [[LLS - Comparisons (OLS vs WLS vs GLS) - Best Linear Unbiased Estimator (BLUE) - Minimum-Variance Unbiased Estimator (MVUE)]]
