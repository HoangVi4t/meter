import { Link } from '../components/common/Links'
import Layout from '../components/layout'

function Index() {
  return (
    <header className="flex h-full flex-col items-center justify-center sm:max-lg:min-h-[85vh]">
     
    </header>
  )
}

export default Index

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}
