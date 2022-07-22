
const Carousal = () => {
  return (
       
        <div className="container space">
    <div id="carouselExampleIndicators" className="carousel slide carousal-bg" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
              <div className="row align-items-center">
                  <div className="col-xl-7">
                      <h1 className="display-4 fw-normal">Mi LED TV 4A PRO 32</h1>
                      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat repellat amet praesentium saepe voluptate obcaecati facere blanditiis accusantium nihil quaerat cum, rem eos sequi quas animi! Reprehenderit illum maxime tempore.</p>
                         
                      <h3 className="price">1289$</h3>

                      <button className="buy-now-btn">Buy Now</button>
                  </div>
                  <div className="col-xl-5">
                    <img src="https://i.ibb.co/V2fvvPD/tv.png" className="d-block w-100" alt="..." />
                   
                  </div>
              </div>
          </div>
          <div className="carousel-item">
            <div className="row align-items-center">
                <div className="col-xl-7 fw-normal">
                    <h1 className="display-4">JBL HEADPHON</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat repellat amet praesentium saepe voluptate obcaecati facere blanditiis accusantium nihil quaerat cum, rem eos sequi quas animi! Reprehenderit illum maxime tempore.</p>
                       
                    <h3 className="price">245$</h3>

                    <button className="buy-now-btn">Buy Now</button>
                </div>
                <div className="col-xl-5">
                    <img src="https://i.ibb.co/6YXnnZx/headphone.png" className="d-block w-100" alt="..." />
                </div>
                </div>
          </div>
          <div className="carousel-item">
              <div className="row align-items-center">
            <div className="col-xl-7">
                <h1 className="display-4 fw-normal">X-BOX</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat repellat amet praesentium saepe voluptate obcaecati facere blanditiis accusantium nihil quaerat cum, rem eos sequi quas animi! Reprehenderit illum maxime tempore.</p>
                   
                <h3 className="price">389$</h3>

                <button className="buy-now-btn">Buy Now</button>
            </div>

            <div className="col-xl-5">
                <img src="https://i.ibb.co/0qsPhTR/xbox.png" className="d-block w-100" alt="..." />

            </div>
            
          </div>

        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
</div>




<div className="container catagories space">
    <h2 className="cata">Catagories</h2>
 <div className="row">
     <div className="col-xl-4">
       
         <div className="cat1 d-flex justify-content-between align-items-center">
            
             <h1>Watche</h1>
             <img src="https://i.ibb.co/Vp9ZfWr/watch.png" alt="watch" border="0" />
         </div>
     </div>

     <div className="col-xl-4">
    
         <div className="cat2 d-flex justify-content-between align-items-center">
             <h1>Bag</h1>
             <img src="https://i.ibb.co/JFsLgWw/bag.png" alt="bag" border="0" />
         </div>
     </div>

     <div className="col-xl-4">
         <div className="cat3 d-flex justify-content-between align-items-center">
             <h1>Shoes</h1>
             <img src="https://i.ibb.co/mBtKTsd/shoes.png" alt="shoes" border="0" />
         </div>
     </div>
 </div>
</div>


<div className="container space">
    <div className="row">
        <h2>Shoes</h2>
    <div className="col-xl-4">
        
        <div className="card shadow p-4" style="width: 25rem; border-radius: 10px; border: 1px solid transparent;">
            <img src="https://i.ibb.co/16QsqXb/shoe-1.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5>Reebok Dart Men's Shoes</h5>
              <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et, eius!</p>
              <h5>$1059</h5>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
    </div>
    <div className="col-xl-4">
        <div className="card shadow p-4" style="width:25rem; border-radius: 10px; border: 1px solid transparent;">
            <img src="https://i.ibb.co/cvszWqg/shoe-2.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5>Reebok Pump</h5>
              <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, vero?</p>
              <h5>$168</h5>
              <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
    </div>
    <div className="col-xl-4">
        <div className="card shadow p-4" style="width: 25rem; border-radius: 10px; border: 1px solid transparent;">
            <img src="https://i.ibb.co/xjQKsSf/shoe-3.png" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5>Reebok All Terrain</h5>
              <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, </p>
             <h5>$128</h5>
             <button className="buy-now-btn">Buy Now</button>
            </div>
          </div>
    </div>
    </div>
</div>


<h2>Backpack</h2>
<div className="row row-cols-1 row-cols-md-3 g-4 w-70 space">
    
    <div className="col">
      <div className="card h-100">
        <img src="https://i.ibb.co/C9N0wCz/bag-1.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Ison Backpack</h5>
          <h5>$103</h5>
          <p className="card-text">This is a wider card with. This content is a little bit longer.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <button className="buy-now-btn1">Buy Now</button>
          </small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 w-70">
        <img src="https://i.ibb.co/S7s6T4n/bag-2.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Biaowang Backpack</h5>
          <h5>$123</h5>
          <p className="card-text">This card has supporting text below as a natural..</p>
        </div>
        <div className="card-footer">
         
            <small className="text-muted">
                <button className="buy-now-btn1">Buy Now</button>
              </small>
         
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100 w-70">
        <img src="https://i.ibb.co/HF38Vnw/bag-3.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Dxyizu Ws54 Smart</h5>
          <h5>$119</h5>
          <p className="card-text">This is a wider card with show that equal height action.</p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <button className="buy-now-btn1">Buy Now</button>
          </small>
        </div>
      </div>
    </div>
  </div>



<div className="container footer">
    <div className="footer-content text-center">
    <h2>let's stay in touch</h2>
    <p>Get updates on sales specials and more</p>

    <input type="text" /> <br />

    <button className="buy-now-btn3">Submit</button>
</div>
</div>


<p className="copyright text-center">Copiright All Right rserved By Sabbir R Tahsan</p>

</div> 



  )
}

export default Carousal