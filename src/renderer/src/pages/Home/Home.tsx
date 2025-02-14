import HomeStates from '@renderer/components/Home/Home'
import Dashboard from '@renderer/layout/Dashboard/Dashboard'

const Home = (): JSX.Element => {
  return (
    <Dashboard>
      <div>
        <HomeStates />
      </div>
    </Dashboard>
  )
}

export default Home
