<script setup>

</script>

<template>
<div class="extra-info-component">
    <div class="top-verbruik-card">
        <img src="../../assets/icons/usage.png">
        <p>Top verbruikers (week)</p>
        <div class="verbruikers">
            <p class="verbruiker">The Penta</p>
            <p class="verbruiker">Hangar K</p>
            <p class="verbruiker">VEG-I-TEC</p>
        </div>
    </div>
    <div class="wist-je-dat-card">
        <h1>Wist je dat...</h1>
        <div class="info">
            <img src="../../assets/icons/lightbulb.png" alt="">
            <p>Een spelconsole verbuikt meer dan een koelkast.</p>
        </div>
    </div>
</div>
 
</template>

<style scoped lang="scss">


    .extra-info-component {
        display: flex;
        flex-wrap: wrap;
        height: 80vh;
        width: 26%;

        .top-verbruik-card {
            background-color: #E6E6F5;
            width: 100%;
            height: 65.5%;

            border-radius: 15px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 

            img {
                display: flex;
                width: 24%;
                margin-top: 10%;
                margin-left: auto;
                margin-right: auto;
            }

            p {
                margin-top: 3%;
                text-align: center;

                font-size: 180%;
                font-weight: bold;
                color: #05052E;
            }

            .verbruikers {
                display: flex;
                flex-direction: column;

                justify-content: center;
                align-items: center;

                margin-top: 1%;

                .verbruiker {
                    font-size: 150%;
                    background-color: #A8A8F5;

                    width: 85%;
                    height: 6vh;
                    border-radius: 15px;

                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }
        .wist-je-dat-card {
            background-color: #A8A8F5;
            width: 100%;
            height: 32%;

            border-radius: 15px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2); 

            h1 {
                margin-top: 7%;
                margin-left: 5%;
                font-size: 280%;
                font-weight: bold;
            }
            
            
            .info {
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 5%;
                
                img {
                    width: 15%;
                }

                p {
                    padding-top: 3%;
                    font-size: 140%;
                    font-weight: bold;

                }
            }
        }
    }
</style>