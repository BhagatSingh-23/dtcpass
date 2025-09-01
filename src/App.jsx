
import './App.css'

function App() {

  return (
    <>
      <div className='navbar'>
        <p>E- Bus Pass</p>
      </div>
      <div className='container'>
       
        <div className='main-container'>
          <img className='bookmark' src="./bookmark.png" alt="" />
          <h2>DTC And Cluster Bus Pass</h2>
          {/* <hr/> */}
          <img className='passport' src="/photo.jpg" alt="" width={230} height={215}/>
          <p className='sameP'>ASHISH KASHYAP</p>
          <p className='sameP'>Student All route AC/Non AC</p>
          
          <span className='pass'>

            <span className='BusPass'>Bus Pass No.</span>
            <span className='appNo'> 7502022581577</span>

          </span>

          <div className='redP'>Valid from 22/04/2025 to 21/09/2025</div>

          <div className='foot-img'>
            <div className='sign-img'><img src="./sign.png" alt="" width={80} /></div>
            <div className='qr-img'><img src="./qr.png" alt="" width={70} height={70} /></div>
          </div>
          
        </div>
      </div>
      <div className='footer'>

        <p>Copyright © - Delhi e-Governance Society 2025</p>

      </div>
    </>
  )
}

export default App
