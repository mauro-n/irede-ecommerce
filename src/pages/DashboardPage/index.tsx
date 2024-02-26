import DashMonthSalesVisual from "../../components/DashMonthSalesVisual"
import DashOverviewData from "../../components/DashOverviewData"
import DashProductAnalysis from "../../components/DashProductAnalysis"
import DashSalesData from "../../components/DashSalesData"
import DashUsersOverview from "../../components/DashUsersOverview"

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
