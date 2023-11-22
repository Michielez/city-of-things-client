<script setup>

</script>

<template>
<div class="verbruik-component">
    <div class="title-card">
        <img src="../../assets/icons/energy.png">
        <p>Verbruik "Kortrijk Weide"</p>
      </div>
    <div class="energie-card">
        <div>
            <h1>Prijs energie</h1>
        </div>
        <div class="devider"></div>
        <div class="prijzen">
            <div class="moment vandaag">
                <p>Vandaag</p>
                <p>€ 192.62</p>
            </div>
            <div class="moment week">
                <p>Deze week</p>
                <p>€ 845.26</p>
            </div>
            <div class="moment maand">
                <p>Deze maand</p>
                <p>€ 2514.45</p>
            </div>
        </div>
    </div>
    <div class="gauge-card">
        <h1>Realtime</h1>
        <img src="../../assets/images/gauge-chart-example.svg">
        <div>
            <p>niet hernieuwbaar</p>
            <p>hernieuwbaar</p>
        </div>
    </div>
</div>
 
</template>

<style scoped lang="scss">
    .verbruik-component {
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
        .energie-card {
            background-color: #E6E6F5;
            width: 100%;
            height: 32%;

            border-radius: 15px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 

            h1 {
                margin-top: 5%;
                margin-left: 5%;
                font-size: 120%;
                color: #1515BC;
                font-weight: bold;
            }

            .devider {
                width: 95%;
                height: 0.5%;
                background-color: #05052E;

                margin-top: 2%;
                margin-left: auto;
                margin-right: auto;
            }

            .prijzen {
                display: flex;
                flex-direction: column;
                justify-content: center;
                margin-left: 5%;
                width: 90%;

                .moment {
                    display: flex;
                    justify-content: space-between;
                }

                .vandaag {
                    font-size: 150%;
                    font-weight: bold;
                    margin-top: 5%;
                    color: #05052E;

                    :nth-child(1){
                        margin-top: 1.5%;
                    }
                    :nth-child(2){
                        font-size: 180%;
                    }
                }

                .week {
                    margin-top: 5%;
                    color: #9898FE;
                    font-size: 120%;
                }

                .maand {
                    margin-top: 1%;
                    color: #9898FE;
                    font-size: 120%;
                }
            }
        }
        .gauge-card {
            background-color: #E6E6F5;
            width: 100%;
            height: 32%;

            border-radius: 15px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 

            h1 {
                margin-top: 5%;
                margin-left: 5%;
                font-size: 120%;
                color: #1515BC;
                font-weight: bold;
            }

            img {
                display: flex;
                width: 60%;
                margin-left: auto;
                margin-right: auto;
            }

            div {
                display: flex;
                justify-content: space-around;


                p {
                    color: #05052E;
                    font-weight: bold;
                }
            }
        }
           
    }
</style>