import DashMonthSalesVisual from '../../components/Cards/DashMonthSalesVisual'
import DashOverviewData from '../../components/Cards/DashOverviewData'
import DashProductAnalysis from '../../components/Cards/DashProductAnalysis'
import DashSalesData from '../../components/Cards/DashSalesData'
import DashUsersOverview from '../../components/Cards/DashUsersOverview'

const DashboardPage = () => {
    return (
        <main className="min-h-screen px-4 py-8 md:w-4/5 mx-auto container">
            <section className="flex justify-between">
                <DashOverviewData />
                <DashSalesData />
            </section>
            <section className="flex justify-between">
                <DashMonthSalesVisual />
                <DashUsersOverview />
                <DashProductAnalysis />
            </section>
        </main>
    )
}

export default DashboardPage
