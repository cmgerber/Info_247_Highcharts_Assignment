Info_247_Highcharts_Assignment
==============================
1.Noticing issues with or anomalies in department spending, both year-to-date and during individual months
2.Seeing trends in terms of how accurately budgets were planned -- ups and downs -- through the year-to-date.
3.Comparing the performance of individual departments
4.Noticing commonalities among department categories


For comparing the performance of individual departments, the first design works better. The groups of 8 individual bar charts allows the user to see clearly the percentage difference between actual spending and budget per month per department. The shape of each graph also tells the user whether the department has consistently overspent or underspent. 

For noticing commonalities among department categories, the 2nd design works better. Both the YTD difference between actual spending and budget line chart and the monthly difference between actual spending and budget line chart are good at showing the overall trend of spending for each department. The monthly line chart shows that starting from August, some departments including Executive, IT, Facilities, have reduced spending consistently till November. Their trend lines show a downward slope. The YTD line chart shows that Tech Support, Finance, are consistently under budget throughout the year, wherease Executive and IT are consistently over budget; Facilities and Sales are consistently neither overspending nor underspending. 


Design decisions for the 2nd design (line charts)
First, because line charts are good at showing trend over time, we decided to choose to use it display the difference between year-to-date actual spending versus budget spending. We want to utilize the pre-attentive property of an irregularly shaped line versus a smooth line to make it easy for user to identify which department is consistent in its spending and which department has ups and downs in its spending. Any sudden up or down of a line will stands out and indicates a large amount of increase or decrease in spending comparing to budget.
Second, we decided to use percentage to show difference between actual and budget spending because we can put all departments on the same scale. Since the budget size among departments vary a lot, showing the absolute difference in dollar amount may mislead user. For example, Sales department can spend an additional $50k each month, but that only counts for 10% over budget. However, if HR department spends $20k more, that is 40% over budget. If the graph uses absolute differences, users might think HR is doing better than Sales.
Third, we used the subtitle for each graph to indicate that our November's actual spending value is a projected number. We don't expect the user will remember the value is projected, therefore we must clearly indicate that on each graph. 
Fourth, we decided to include the November YTD budget versus actual bar chart to give user a reference point on the magnitudes of budget among departments. We sorted the graph so that it shows the budget from high to low. We also decided to indicate what is the YTD actual for the departments to give the user a sense of how each department does by the end of the year in dollar amount. 