import type { NextPage } from 'next'

const Home: NextPage<{products: []}> = ({ products }) => {
  console.log(products)
  return (
    <div></div>
  )
}

export default Home

export async function getServerSideProps() {
  return {
    props: { products: [] }
  }
}