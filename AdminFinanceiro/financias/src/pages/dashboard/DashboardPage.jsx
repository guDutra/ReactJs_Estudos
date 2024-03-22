import React from 'react'
import ChartDashPage from '../../components/ChartDashPage'
import TableIncomes from '../../components/TableIncomes'
import GoalsDashPage from '../../components/GoalsDashPage'
import TableExpenses from '../../components/TableExpenses'
import StatsDashPage from '../../components/StatsDashPage'
import dashboardCss from '../../components/dashboard-page.css'
const DashboardPage = () => {
  return (
    <>
      <div className='dashboardPage'>
        
        <ChartDashPage />
        <GoalsDashPage />
        <TableExpenses />
        <TableIncomes />
        <StatsDashPage/>
      </div>


    </>
  )
}

export default DashboardPage
