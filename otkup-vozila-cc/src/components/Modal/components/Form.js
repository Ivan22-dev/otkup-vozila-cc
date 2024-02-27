import * as React from 'react';
import { useEffect, useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import validator from 'validator'
import { Button } from '@mui/material';

const data = [
  {
    id: "1",
    name: "Zamjena ulja i filtera",
    price: 500,
   
  },
  {
    id: "2",
    name: "Promjena pakni",
    price: 450,
    
  },
  {
    id: "3",
    name: "Promjena guma",
    price: 100,
   
  },
  {
    id: "4",
    name: "Servis klima uređaja",
    price: 299,
    
  },
  {
    id: "5",
    name: "Balansiranje guma",
    price: 50,
    
  },
  {
    id: "6",
    name: "Zamjena ulja u kočnicama",
    price: 229,
    
  }
];
const Form = () => {
  /*selectCar Start*/
  const [model, setValue] = React.useState('');
  const [error, setError] = React.useState(false)
  const handleRadioChange = (event) => {
    setValue(event.target.value)
    setError(false);
  };
  const handleChange = (event) => {
    event.preventDefault()
    if (model) {
      setError(true);
    }  
  };
  /*selectCar End*/

  /*selectService Start*/ 
  const [serviceInfo, setServiceInfo] = useState({})
  const toggleHandler = (item) => () => {
    setServiceInfo((state) => ({
      ...state,
      [item.id]: state[item.id]
        ? 0
        : {
            coord: item.coord,
            name: item.name,
            price: item.price, 
          }
    })); 
  }
  useEffect(() => {
    setTotal(totalSum-((totalSum*1.3)-totalSum));
    setPercentage(((totalSum*1.3)-totalSum));
  }, [serviceInfo]);
  var totalSum =0;
  var service= {}
  for (const [key, value] of Object.entries(serviceInfo)){
    if(value.price){
      totalSum+=Number(value.price);
      service[value.name] = value.price;
    }
  }
  /*selectService End*/ 

  /*Coupon Start*/
  const [total, setTotal] = useState('');
  const [percentage, setPercentage] = useState('')
  const [code, setCoupon] = useState('');
  const [ wrongPass,setError3] =useState('');
  const [ hideSelect,setError4] =useState('true')
  const [ all,setError5] =useState('false')
  const closeWarning = (e) => {
    setError3();
  };
  const handleCoupon = (e) => {
    e.preventDefault();
    if(code==="Tokić123"){
      setError2(false)
      setError4(false)
      setError5(true)
      setError3(<p class="text-success"> Hvala vam, unijeli ste ispravan kod kupona</p>)
    }
    else if(code===""){
      setError3(<p class="text-danger"><button type="button" className="close" onClick={closeWarning}> &times; </button> Morate unijeti vrijednost! </p>)
    }
    else{
      setError3(<p class="text-danger"><button type="button" className="close" onClick={closeWarning}> &times; </button> Unijeli ste nevažeći kupon! </p>)
    }
  };
  const [showCoupon, setError2] = React.useState(false)
  const coupon = () => {
    setError2(true)
  }
  /*Coupon End*/

  /*userData Start*/
  const [emailError, setEmailError] = useState('')
  const [email, setEmail] = useState('')
  const [eSuccess, setEmailSuccess] = useState('false')
  const validateEmail = (e) => {
  var email = e.target.value
  setEmail(email)
  if (validator.isEmail(email)) {
    setEmailError(<p class="text-success">Ispravan unos</p>)
    setEmailSuccess(true)
  } 
  else if(email===""){
    setEmailError(<p class="text-danger">Morate unijeti vrijednost!</p>)
    setEmailSuccess(false)
  }
  else {
    setEmailError(<p class="text-danger">Unesite ispravan Email!</p>)
    setEmailSuccess(false)
  }
  }
  const [nameError, setNameError] = useState('')
  const [name, setName] = useState('')
  const [nSuccess, setNameSuccess] = useState('false')
  const validateName= (e) =>  {
    var name = e.target.value
    setName(name)
    const namePattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/
    if (namePattern.test(name.toString()) ) {
      setNameError(<p class="text-success">Ispravan unos</p>)
      setNameSuccess(true)
    } 
    else if(name===""){
      setNameError(<p class="text-danger">Morate unijeti vrijednost!</p>)
      setNameSuccess(false)
    }
    else {
      setNameError(<p class="text-danger">Unesite ime i prezime!</p>)
      setNameSuccess(false)
    }
  }
  const [phoneError, setPhoneError] = useState('')
  const [phone, setPhone] = useState('')
  const [pSuccess, setPhoneSuccess] = useState('false')
  const validatePhone= (e) =>  {
    var phone = e.target.value
    setPhone(phone)
    const phonePattern =  /^\d{5,10}$/
    if (phonePattern.test(phone) ) {
      setPhoneError(<p class="text-success">Ispravan unos</p>)
      setPhoneSuccess(true)
    }
    else  if(phone===""){
      setPhoneError(<p class="text-danger">Morate unijeti vrijednost!</p>)
      setPhoneSuccess(false)
    }
    else {
      setPhoneError(<p class="text-danger">Unesite ispravan broj!</p>)
      setPhoneSuccess(false)
    }
  }
  const [remark, setRem] = useState('')
    if(!remark){
      setRem('Niste unijeli napomenu!')
    }
  /*userData End*/

  return (
    <><div className="home" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '30vh'}}>
        <div class="container" >
        <h4>Pritisnite gumb niže kako bi ste pokrenuli</h4>
        <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#selectCar">Pokreni Konfigurator</button>

        {/*selectCar Start*/}
        <div className="modal fade"  role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Konfigurator servisa</h4>
              </div>
              <div className="modal-body">
              <h4 style={{ display: 'flex',  justifyContent:'left', alignItems:'left',}}>Korak 1. Odaberite proizvođača vašeg vozila</h4>
              <form onChange={handleChange}>
                <FormControl
                sx={{ m: 3 }}
                component="fieldset"
                error={error}
                variant="standard"
                >
                <RadioGroup
                  aria-label="quiz"
                  name="quiz"
                  value={model}
                  onChange={handleRadioChange}
                >
                <div className="form-check form-check-inline">
                <FormControlLabel value="Peugeot" control={<Radio />} label="Peugeot" />
                <FormControlLabel value="Volkswagen" control={<Radio />} label="Volkswagen" />
                <FormControlLabel value="Citroen" control={<Radio />} label="Citroen" />
                <FormControlLabel value="Audi" control={<Radio />} label="Audi" />
                <FormControlLabel value="Bmw" control={<Radio />} label="Bmw" />
                <FormControlLabel value="Seat" control={<Radio />} label="Seat" />
                <FormControlLabel value="Alfa Romeo" control={<Radio />} label="Alfa Romeo" />
                </div>
                <div className="form-check form-check-inline">
                <FormControlLabel value="Kia" control={<Radio />} label="Kia" />
                <FormControlLabel value="Hyundai" control={<Radio />} label="Hyundai" />
                <FormControlLabel value="Honda" control={<Radio />} label="Honda" />
                <FormControlLabel value="Toyota" control={<Radio />} label="Toyota" />
                </div>
                </RadioGroup>
                <div className="modal-footer">
                </div>
                {(() => {
                if (model) {
                  return (
                    <Button class="btn btn-success"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#selectService">Nastavi</Button>
                  )
                } else if(!error){
                  return(
                    <p class="text-danger">Odabir vozila je obvezan!</p>
                  )}
                  })()}
              </FormControl>
              </form>
              </div>
            </div> 
            </div>
          </div>
        </div>
        {/*selectCar End*/}

        {/*selectService Start*/}
          <div className="modal fade" id="selectService" role="dialog">
          <div className="modal-dialog">  
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Konfigurator servisa</h4>
              </div>
              <div className="modal-body">
              <h4 style={{ display: 'flex',  justifyContent:'left', alignItems:'left',}}>Korak 2. Odaberite jednu ili više usluga</h4> 
              <FormControl component="fieldset">
                  <FormGroup>
                  <div className="form-check form-check-inline">
                    {data.map((item) => {
                        return (
                          <div
                            key={item.id}
                            style={{
                              display: "inline-flex",
                              width: "150px"
                            }}>
                            <input
                              onChange={toggleHandler(item)}
                              checked={serviceInfo[item.id]}
                              style={{ margin: "20px" }}
                              type="checkbox"
                            /><div className="form-check form-check-inline">
                          <p>{item.name} ({item.price} kn)</p></div>
                          </div>
                        );
                      })}
                  </div>  
                </FormGroup>
                </FormControl>
                <div className="modal-footer">
                <form onSubmit={handleCoupon}>
                  <FormControl>
                    {(() => {
                    if (showCoupon && totalSum>0) {
                      return (
                        <div className="hero-body">
                          {wrongPass}  
                          <input 
                      type="text"  
                      class="form-control"      
                      placeholder='Unesi kupon*'  
                      onChange={(e) => setCoupon(e.target.value)}
                    /><br/><button class="btn btn-primary btn-sm"   variant="outlined">Potvrdi unos</button>  
                        </div>
                      )
                      }else if(hideSelect && totalSum>0 ) {
                        return(   
                          <Button onClick={coupon}>
                          Imam kupon
                        </Button>
                        )
                      }
                    })()}
                </FormControl>
                </form>
                {(() => {
                    if (all===true) {
                      return (
                        <div className="hero-body">
                          {wrongPass} 
                          <h5 className="font-weight-bold">
                          OSNOVICA: {totalSum.toFixed(2)} KN</h5>
                          <h5 className="font-weight-bold">
                          Popust (30%): -{percentage.toFixed(2)} KN</h5>
                          <h3 className="font-weight-bold">
                          UKUPNO: {total.toFixed(2)} KN</h3>
                        </div>
                      )
                    } else {
                      return(
                        <h3 className="font-weight-bold">
                          UKUPNO: {totalSum.toFixed(2)} KN</h3>
                            )
                            }
                    })()}
                    <div className="modal-footer">
                    </div>
                    </div>
                    {(() => {
                        if (totalSum>0) {
                          return (
                            <Button  class="btn btn-success btn-sm"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#userData">Nastavi</Button>
                          )
                        } else {
                          return(
                            <p class="text-danger">Odabir barem jednog servisa je obvezan!</p>
                          )
                        }
                      })()}{'\n'}
                   <Button  class="btn btn-primary btn-sm"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#selectCar">Natrag</Button>
                  </div>
              </div>
            </div>
          </div>
        </div>
        {/*selectService End*/}


        {/*userData Start*/}
        <div className="modal fade" id="userData" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal">&times;</button>
                <h4 className="modal-title">Konfigurator servisa</h4>
              </div>
              <div className="modal-body">
                  <h4 style={{ display: 'flex',  justifyContent:'left', alignItems:'left',}}>Korak 3. Vaši kontakt podaci</h4>
                <div style={{
                        display: "inline-flex",
                        width: "200px",
                        float:"left",
                      }}>
                <input type="text" 
                name="name" 
                size="30" 
                maxlength="30"  
                placeholder="Ime i prezime*"
                value={name}
                onChange={(e) => validateName(e)}
                className="form-control" />
                <span style={{
                  fontWeight: 'bold',
                }}>{nameError}</span>  </div> 
                <div className="hero-body" style={{
                          display: "inline-flex",
                          width: "350px",
                          float:"right",
                        }}>    
                <input type="text" name="email" size="30" placeholder="Email*"
                          value={email}
                          onChange={(e) => validateEmail(e)}
                          className="form-control" />
                <span style={{
                  fontWeight: 'bold',
                }}>{emailError}</span>
                </div> 
                <><br /><br /><br /></>
                <div style={{
                          display: "inline-flex",
                          width: "200px",
                          float:"left",
                        }}>
                <input name="phone" size="30" placeholder="Mobitel*"
                minlength="5" 
                maxlength="16"  
                value={phone}
                onChange={(e) => validatePhone(e)}
                className="form-control" />
                <span style={{
                  fontWeight: 'bold',
                }}>{phoneError}</span>
               </div>        
                <div style={{
                          display: "inline-flex",
                          width: "200px",
                        }}>
                <textarea refs="napomena"  className="form-control"   onChange={(e) => setRem(e.target.value)}
                          placeholder="Napomena"/></div>
                  <><br /><br /><br /><br /><br /></>
                  <div className="modal-footer">
                </div>
              {(() => {
                if ( pSuccess===true && eSuccess===true && nSuccess===true) {
                  return (
                    <Button  class="btn btn-success btn-sm"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#allData">Nastavi</Button>
                  )
                } else{return(
                  <p class="text-danger">Polja s oznakom * su obvezna!</p>
                )}
                })()} {'\n'}
                <Button  class="btn btn-primary btn-sm"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#selectService">Natrag</Button>
               </div>
             </div> 
            </div>
          </div>
        {/*userData End*/}

        {/*allData Start*/}
        <div className="modal fade" id="allData" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">Konfigurator servisa</h4>
                </div>
                <div className="modal-body">
                    <h4 style={{ display: 'flex',  justifyContent:'left', alignItems:'left',}}>Korak 4. Pregled i potvrda vašeg odabira</h4>
                    <p>Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko želite promijeniti neki od podataka,
                  možete pritisnuti gumb za uređivanje pored svake od kategorija. Kada ste provjerili i potvrdili 
                  ispravnost svojih podataka pritisnite gumb pošalji na dnu, za slanje upita za servis. </p>
                <div style={{
                          display: "inline-flex",
                          float:"left",
                        }}>
                <label><h4>MODEL VOZILA <Button  class="btn btn-outline-primary"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#selectCar">Uredi</Button></h4></label>  
                </div> 
                <div className="hero-body" style={{
                          display: "inline-flex",
                          float:"right",
                        }}>
                <label><h4>ODABRANE USLUGE <Button  class="btn btn-outline-primary"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#selectService">Uredi</Button></h4></label>
                </div> 
                <><br /><br /><br /></>
                <div style={{
                        float:'left',
                        marginLeft:'25px'
                        }}>
                <p>{model}</p>
                </div>
                {(() => {
                    var content = Object.keys(service).map(key => {
                      return (
                        <div >&#160;
                          <div style={{
                          float:'right',
                          marginRight:'25px'
                        }}>{`${key}`}&#160;&#160;&#160;&#160;{`${service[key]}`} KN
                        </div></div>
                      ); 
                    });return <div>{content}</div>;
                })()} 
                {(() => {
                  if (all===true ) {
                    return (
                      <div style={{
                        float:"right",
                        marginRight:'25px'
                      }}>
                      <h5 className="font-weight-bold">
                        Popust (30%): -{percentage.toFixed(2)} KN</h5>
                        <h4 className="font-weight-bold">
                        UKUPNO: {total.toFixed(2)} KN</h4></div>
                    )} else{
                        return(
                          <div style={{
                            float:"right",
                            marginRight:'25px'
                          }}>
                        <h4 className="font-weight-bold">
                        UKUPNO: {totalSum.toFixed(2)} KN</h4></div>
                    )}})()}
                    <><br /><br /><br /></>
                <div style={{
                          float:"left",
                        }}>
                  <label><h4>KONTAKT PODACI <Button  class="btn btn-outline-primary"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#userData">Uredi</Button></h4></label>  
                <p>Ime i prezime:&#160;&#160;{name}</p>
                <p>Broj telefona:&#160;&#160;{phone}</p>
                </div>
                <div style={{
                        float:"right",
                        marginRight:'25px',
                        marginTop:'4.3em'
                      }}>
                      <p>Email:&#160;&#160;{email}</p>
                </div> 
                <div style={{
                      float:"right",
                      marginRight:'25px',
                    }}>
                    <p>Napomena:&#160;&#160;{remark}</p>   
                </div>
                <div className="modal-footer">
                </div><div className="modal-footer">
                </div>
                <Button  class="btn btn-success btn-sm"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#lastMessage">Pošalji</Button>
                 {'\n'}<Button  class="btn btn-primary btn-sm"  data-dismiss="modal"  variant="outlined" data-toggle="modal" href="#userData">Natrag</Button>
                </div>
              </div> 
            </div>
          </div>
         {/*allData End*/}

        {/*lastMessage Start*/}
        <div className="modal fade" id="lastMessage" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">     
                  <h4 className="modal-title">Konfigurator servisa</h4>
                </div>
                <div className="modal-body">
                    <h4 style={{ display: 'flex',  justifyContent:'center', alignItems:'center',}}>Vaša prijava je uspješno poslana</h4>
                    </div>
                    <p>Vaša prijava je uspješno poslana i zaprimljena. Kontaktirati ćemo <br />vas u najkraćem mogućem roku. Hvala vam.
                </p>
                <Button  class="btn btn-success btn-sm" className="close"  data-dismiss="modal"  variant="outlined" data-toggle="modal">Zatvori</Button>
                <><br /><br /><br /></>
              </div> 
            </div>
          </div>
        {/*lastMessage End*/}
      </>
    );
  }
  export default Form;