<template>
    <div class="ons-doel-component">
      <div class="title-card">
        <img src="../../assets/icons/target.png">
        <p>Ons doel?</p>
      </div>
      <div class="content-card">
        <p>
          <span class="purple-text">City of Things</span> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porttitor urna lacus, et iaculis dui euismod et. Phasellus bibendum aliquet nibh id rhoncus. In rhoncus nulla ut sollicitudin dictum.
        </p>
        <img src="../../assets/images/KortijkLogo.jpg">
      </div>
    </div>
  </template>
  
  <style scoped lang="scss">
    .ons-doel-component {
      display: flex;
      flex-wrap: wrap;
      height: 80vh;
      width: 26%;
  
      .title-card {
        background-color: #E6E6F5;
        width: 100%;
        height: 32%;
  
        border-radius: 15px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
  
        img {
          width: 25%;
        }
  
        p {
          font-size: 190%;
          margin-top: 5%;
          color: #05052E;
          font-weight: bold;
  
          span {
            color: #1515BC;
          }
        }
      }
  
      .content-card {
        background-color: #E6E6F5;
        width: 100%;
        height: 65.5%;
  
        border-radius: 15px;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  
        display: flex;
        flex-direction: column;
        align-items: center;
  
        img {
          width: 75%;
          margin-top: auto;
          margin-bottom: 5%;
        }
  
        p {
          width: 80%;
          font-size: 120%;
          margin-top: 10%;
          color: #05052E;
        }
      }
  
      .purple-text {
        color: #1515BC;
        font-weight: bold;
      }
    }
  </style>
  