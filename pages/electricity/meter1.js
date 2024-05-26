import Layout from '../../components/layout'
import { getMeter1 } from '../api/electricitys/getMeter'
import { useEffect, useState } from 'react'
import MeterBlock from '../../components/meter_block'

export default function Meter1() {
  const [listMeter, setListMeter] = useState()

  async function getMeter() {
    try {
      const res = await getMeter1()
      setListMeter(res.data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getMeter()
  }, [])

  return <>
    <div className='px-2 py-2 md:px-6 bg-[#6bb8fe]'>
      <h1 className='text-[#fa610d] font-semibold text-2xl select-none'>Building Management System (BMS)</h1>
    </div>
    <div className='p-5'>
      <h1 className='text-3xl font-bold '>Meter 1</h1>
      <p>Update time: </p>
      <div className="grid grid-cols-4 mt-5 gap-x-5 gap-y-2.5">
        {listMeter?.map(meter => (
          <div key={meter?.id}>
            <MeterBlock header={meter?.name} />
          </div>
        ))}
      </div>
    </div>
  </>
}

Meter1.getLayout = function getLayout(page) {
  return <Layout meta={{ name: 'Meter1' }}>{page}</Layout>
}
