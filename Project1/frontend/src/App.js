import logo from './logo.svg';
import './App.css';
import {useState} from "react"
import axios from "axios"
function App() {
  const [NCP, setNCP] = useState();
  const [Noodl, setNoodl] = useState();
  const [lays, setlays] = useState();
  const [oreo, setoreo] = useState();
  const [chom, setchom] = useState();
  const [dms, setdms] = useState();
  const [namkeen, setnamkeen] = useState();
  const [asatta, setasatta] = useState();
  const [pasta, setpasta] = useState();
  const [basr, setbasr] = useState();
  const [sunoil, setsunoil] = useState();
  const [resugar, setresugar] = useState();
  const [daal, setdaal] = useState();
  const [teapowder, setteapowder] = useState();
  const [basoap, setbasoap] = useState();
  const [shampoo, setShampoo] = useState();
  const [bodylo, setbodylo] = useState();
  const [facecre, setfacecre] = useState();
  const [shavfoam, setshavfoam] = useState();
  const [facemask, setfacemask] = useState();
  const [handsan, sethandsan] = useState();

  // --------------------------------------------------------------
  const [name, setname] = useState();
  const [no, setno] = useState();
  const [billno, setbillno] = useState();
  const [search, setsearch] = useState();
  const [tbill, settbill] = useState(0);
  const [tax, settax] = useState(18);
  const showBill = ()=>{
    let billAmount = 0;
    if (NCP) {
      billAmount += 120 * NCP
    }
    if (Noodl) {
      billAmount += 50 * Noodl
    }
    if (lays) {
      billAmount += 10 * lays
    }
    if (oreo) {
      billAmount += 20 * chom
    }
    if (chom) {
      billAmount += 70 * chom
    }
    if (dms) {
      billAmount += 60 * dms
    }
    if (namkeen) {
      billAmount += 15 * namkeen
    }
    if (asatta) {
      billAmount += 100 * asatta
    }
    if (pasta) {
      billAmount += 50 * pasta
    }
    if (basr) {
      billAmount += 90 * basr
    }
    if (sunoil) {
      billAmount += 150 * sunoil
    }
    if (resugar) {
      billAmount += 50 * resugar
    }
    if (daal) {
      billAmount += 80 * daal
    }
    if (teapowder) {
      billAmount += 130 * teapowder
    }
    if (basoap) {
      billAmount += 20 * basoap
    }
    if (shampoo) {
      billAmount += 3 * shampoo
    }
    if (bodylo) {
      billAmount += 90 * bodylo
    }
    if (facecre) {
      billAmount += 140 * facecre
    }
    if (shavfoam) {
      billAmount += 150 * shavfoam
    }
    if (facemask) {
      billAmount += 10 * facemask
    }
    if (handsan)  {
      billAmount += 30 * handsan
    }
    
      settbill(billAmount)
  }

  const savebill = ()=>{
    const obj = {
      NCP,
      Noodl,
      lays, 
      oreo,
      chom,
      dms, 
      namkeen, 
      asatta, 
      pasta, 
      basr, 
      sunoil, 
      resugar, 
      daal, 
      teapowder, 
      basoap, 
      shampoo,
      bodylo,
      facecre,
      shavfoam, 
      facemask, 
      handsan,
    }
    const user = {
      name,
      "bill":obj,
      billno,
      "contact"  : no
    }

    console.log("uu",user);

    if(sessionStorage.getItem("user")){
      axios.put(`http://localhost:3001/clients/${sessionStorage.getItem("user")}`, user)
        .then(response => this.setState({ updatedAt: response.data.updatedAt }));
    }
   else{
    axios.post(`http://localhost:3001/clients`,  user )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    .then(e =>{
      console.log(e);
    })
   }
sessionStorage.clear()
  }

  const searchUser = ()=>{
   try {
    axios.get(`http://localhost:3001/clients`)
    .then(async res => {
     res.data.map((v)=>{
      if(v.name == search){
        sessionStorage.setItem("user",v._id)
        setname(v.name)
        setno(v.contact)
        setbillno(v.billno)
        setNCP(v.bill.NCP)
        setNoodl(v.bill.Noodl)
        setlays(v.bill.lays) 
        setoreo(v.bill.oreo)
        setchom(v.bill.chom)
        setdms(v.bill.dms)
        setnamkeen(v.bill.namkeen)
        setasatta(v.bill.asatta) 
        setpasta(v.bill.pasta)
        setbasr(v.bill.basr)
        setsunoil(v.bill.sunoil) 
        setresugar(v.bill.resugar) 
        setdaal(v.bill.daal)
        setteapowder(v.bill.teapowder) 
        setbasoap(v.bill.basoap)
        setShampoo(v.bill.shampoo)
        setbodylo(v.bill.bodylo)
        setfacecre(v.bill.facecre)
        setshavfoam(v.bill.shavfoam) 
        setfacemask(v.bill.facemask)
        sethandsan(v.bill.handsan)
        
      }
    })
    })
 
     
   } catch (error) {
     console.log(error);
   }
  }

  const clear = ()=>{
    sessionStorage.clear()
        // setname("")
        // setno("")
        // setbillno(0)
        // setNCP(0)
        // setNoodl(0)
        // setlays(0) 
        // setoreo(0)
        // setchom(0)
        // setdms(0)
        // setnamkeen(0)
        // setasatta(0) 
        // setpasta(0)
        // setbasr(0)
        // setsunoil(0) 
        // setresugar(0) 
        // setdaal(0)
        // setteapowder(0) 
        // setbasoap(0)
        // setShampoo(0)
        // setbodylo(0)
        // setfacecre(0)
        // setshavfoam(0) 
        // setfacemask(0)
        // sethandsan(0)
        window.location.reload(false);
  }
  return (
    <div className="container" style={{marginTop:"50px"}}>
      <div className='row' style={{border:"1px solid black",marginBottom:"15px",paddingTop:"10px",backgroundColor:"#efecec"}}>
        <div className='col-3'>
        <div class="input-group input-group-sm mb-3">
          <span style={{width:"140px"}}>Customer Name :</span>
          <input defaultValue={name} type="text"  class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setname(v.target.value);}}/>
          </div>
        </div>
        <div className='col-3'>
        <div class="input-group input-group-sm mb-3">
          <span style={{width:"100px"}}>Contact No :</span>
          <input defaultValue={no} type="number" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setno(v.target.value);}}/>
          </div>
        </div>
        <div className='col-3'>
        <div class="input-group input-group-sm mb-3">
          <span style={{width:"60px"}}>Bill No:</span>
          <input defaultValue={billno} type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setbillno(v.target.value);}}/>
          </div>
        </div>
        <div className='col-3'>
        <div class="input-group input-group-sm mb-3">
          <span style={{width:"70px"}}>Search:</span>
          <input  type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setsearch(v.target.value);}}/>
          <button type="button" class="btn btn-secondary" onClick={searchUser}>Search</button>
          </div>
          
        </div>
      </div>
      <div className="row" style={{border:"1px solid black",backgroundColor:"#efecec"}}>
        <div className="col-3">
          <div className='row'>
            <div className='col-8'>
            <h3>Snacks </h3>
            </div>
            <div className='col-4'>
            <h3>Qty. </h3>
            </div>
          </div>
         

          <div class="input-group input-group-sm mb-3">
          <span >Nutella Choco Spread :</span>
          <input  type="number" defaultValue={NCP} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setNCP(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Noodlest(1 Pck) :</span>
          <input  type="number" defaultValue={Noodl} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setNoodl(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >lays(10Rs):</span>
          <input  type="number" defaultValue={lays} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setlays(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >oreo(20Rs):</span>
          <input  type="number" defaultValue={oreo} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setoreo(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >chocolate muffin :</span>
          <input  type="number" defaultValue={chom} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setchom(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Dariy milk silk(60RS):</span>
          <input  type="number" defaultValue={dms} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setdms(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Namkeen(15Rs):</span>
          <input  type="number" defaultValue={namkeen} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setnamkeen(v.target.value);}}/>
          </div>

         
        </div>


        <div className="col-3">
        <div className='row'>
            <div className='col-8'>
            <h3>Grocery </h3>
            </div>
            <div className='col-4'>
            <h3>Qty. </h3>
            </div>
          </div>
         
        
          <div class="input-group input-group-sm mb-3">
          <span >Ashirvaad Atta(1Kg):</span>
          <input  type="number" defaultValue={asatta} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setasatta(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Pasta(1Kg) :</span>
          <input  type="number" defaultValue={pasta} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setpasta(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Basmathiu Rice(1Kg) :</span>
          <input  type="number" defaultValue={basr} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setbasr(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Sunflower oil(1ltr) :</span>
          <input  type="number" defaultValue={sunoil} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setsunoil(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Refined sugar(1Kg) :</span>
          <input  type="number" defaultValue={resugar} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setresugar(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Daal(1Kg):</span>
          <input  type="number" defaultValue={daal} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setdaal(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Tea powder(1Kg) :</span>
          <input  type="number" defaultValue={teapowder} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setteapowder(v.target.value);}}/>
          </div>


        </div>


        <div className="col-3">
        
        <div className='row'>
            <div className='col-8'>
            <h3>Beauty</h3>
            </div>
            <div className='col-4'>
            <h3>Qty. </h3>
            </div>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Bathing soap :</span>
          <input  type="number" defaultValue={basoap} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setbasoap(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Shampoo(200ml) :</span>
          <input  type="number" defaultValue={shampoo} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setShampoo(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Body Loation(1 Ltr) :</span>
          <input  type="number" defaultValue={bodylo} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setbodylo(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Face Cream :</span>
          <input  type="number" defaultValue={facecre} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{ setfacecre(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Shaving foam:</span>
          <input  type="number" defaultValue={shavfoam} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setshavfoam(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Face mask(1piece) :</span>
          <input  type="number" defaultValue={facemask} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{setfacemask(v.target.value);}}/>
          </div>
          <div class="input-group input-group-sm mb-3">
          <span >Hand Sanitizer(50ml) :</span>
          <input  type="number" defaultValue={handsan} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{sethandsan(v.target.value);}}/>
          </div>



        </div>


        <div className="col-3" style={{border:"1px solid black", overflowY:"scroll", maxHeight:"400px"}}>
        <h5 style={{fontSize:"15px",textAlign:"center", marginTop:"10px"}}>WELCOME TO GROCERY</h5>
        <h5 style={{fontSize:"15px",textAlign:"center", marginTop:"0px"}}>Phone-No: 8805977852</h5>
        <h5 style={{fontSize:"15px", marginTop:"0px"}}>Bill No: {billno}</h5>
        <h5 style={{fontSize:"15px", marginTop:"0px"}}>Customer Name: {name}</h5>
        <h5 style={{fontSize:"15px", marginTop:"0px"}}>Contact No: {no}</h5>
        <hr />
        <table class="table">
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Qty</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
  {NCP && 
        <tr>
          <td>Nutella Choco Spread</td>
          <td>{NCP && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{NCP} </h5>}</td>
          <td>{NCP * 120}</td>
        </tr>
        }
    {Noodl && 
    <tr>
      <td>Noodles(1 Pack)</td>
      <td>{Noodl && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{Noodl} </h5>}</td>
      <td>{Noodl * 50}</td>
    </tr>
    }
    {lays && 
        <tr>
          <td>lays(10Rs)</td>
          <td>{lays && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{lays} </h5>}</td>
          <td>{lays * 10}</td>
        </tr>
        }
    {oreo && 
    <tr>
      <td>Oreo(20Rs)</td>
      <td>{oreo!= 0 && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{oreo} </h5>}</td>
      <td>{oreo * 20}</td>
    </tr>
    }
    {chom && 
    <tr>
      <td>chocolate Muffin</td>
      <td>{chom && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{chom} </h5>}</td>
      <td>{chom * 70}</td>
    </tr>
    }
    { dms && 
    <tr>
      <td>Dairy milk silk(60Rs)</td>
      <td>{dms && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{dms} </h5>}</td>
      <td>{dms * 60}</td>
    </tr>
    }
    {namkeen && 
    <tr>
      <td>Namkeen(15Rs)</td>
      <td>{namkeen && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{namkeen} </h5>}</td>
      <td>{namkeen * 15}</td>
    </tr>
    }
    {asatta && 
    <tr>
      <td>Aashirvaad Atta(1Kg)</td>
      <td>{asatta && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{asatta} </h5>}</td>
      <td>{asatta * 100}</td>
    </tr>
    }
    {pasta && 
    <tr>
      <td>Pasta</td>
      <td>{pasta && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{pasta} </h5>}</td>
      <td>{pasta * 50}</td>
    </tr>
    }
    {basr &&
    <tr>
      <td>Basmathi Rice(1Kg)</td>
      <td>{basr && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{basr} </h5>}</td>
      <td>{basr * 90}</td>
    </tr>
    }
    {sunoil && 
    <tr>
      <td>Sunflower oil(1 ltr)</td>
      <td>{sunoil && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{sunoil} </h5>}</td>
      <td>{sunoil * 150}</td>
    </tr>
    }
    {resugar && 
    <tr>
      <td>Refined sugar(1Kg)</td>
      <td>{resugar && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{resugar} </h5>}</td>
      <td>{resugar * 50}</td>
    </tr>
    }
    {daal && 
    <tr>
      <td>Daal(1Kg)</td>
      <td>{daal && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{daal} </h5>}</td>
      <td>{daal * 80}</td>
    </tr>
    }
    {teapowder && 
    <tr>
      <td>Tea Powder(1Kg)</td>
      <td>{teapowder && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{teapowder} </h5>}</td>
      <td>{teapowder * 130}</td>
    </tr>
    }
    {basoap && 
    <tr>
      <td>Bathing soap</td>
      <td>{basoap && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{basoap} </h5>}</td>
      <td>{basoap * 20}</td>
    </tr>
    }
    {shampoo && 
    <tr>
      <td>Shampoo(200ml)</td>
      <td>{shampoo && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{shampoo} </h5>}</td>
      <td>{shampoo * 3}</td>
    </tr>
    }
    {bodylo && 
    <tr>
      <td>Body Loation(1ltr)</td>
      <td>{bodylo && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{bodylo} </h5>}</td>
      <td>{bodylo * 90    }</td>
    </tr>
    }
    {facecre && 
    <tr>
      <td>Face cream</td>
      <td>{facecre && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{facecre} </h5>}</td>
      <td>{facecre * 140}</td>
    </tr>
    }
    {shavfoam && 
        <tr>
          <td>Shaving foam</td>
          <td>{shavfoam && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{shavfoam} </h5>}</td>
          <td>{shavfoam * 150}</td>
        </tr>
        }
    {facemask && 
    <tr>
      <td>Face mask(1 piece)</td>
      <td>{facemask && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{facemask} </h5>}</td>
      <td>{facemask* 10}</td>
    </tr>
    }
    {handsan && 
        <tr>
          <td>Hand sanitizer(50pasta)</td>
          <td>{handsan && <h5 style={{fontSize:"15px", marginTop:"0px"}}>{handsan} </h5>}</td>
          <td>{handsan * 30}</td>
        </tr>
        }
   
  </tbody>
</table>
<hr />
<h5 style={{fontSize:"15px", marginTop:"0px"}}>Total Amount: {tbill}</h5>
<h5 style={{fontSize:"15px", marginTop:"0px"}}>Total Tax: {((tax/100) * tbill)}</h5>
<h5 style={{fontSize:"15px", marginTop:"0px"}}>Total Billing Amount: {tbill + ((tax/100) * tbill)}</h5>


        </div>
        </div>
        <div className="row" style={{border:"1px solid black", marginTop:"15px", marginBottom:"15px",backgroundColor:"#efecec"}}>
        <div className='col-4'>
        <h3>Billing Summery</h3>
        <div class="input-group input-group-sm mb-3">
          <span >GST in %:</span>
          <input  type="number" defaultValue={tax} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(v)=>{settax(v.target.value);}}/>
          </div>
        </div>
        <div className='col-auto' style={{marginTop:"30px"}}>
        <button type="button" class="btn btn-secondary" onClick={showBill}>Total Bill</button>
        </div>
        <div className='col-1' style={{marginTop:"30px"}}>
        <button type="button" class="btn btn-secondary" onClick={clear}>Clear</button>
        </div>

        <div className='col-4'  style={{marginTop:"30px"}}>
        <button type="button" class="btn btn-secondary" onClick={savebill}>Save Bill</button>
        </div>

      </div>
     
    </div>
  );
}

export default App;
