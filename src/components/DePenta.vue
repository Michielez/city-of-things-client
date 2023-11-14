<script>
import BuildingTemplate from './building_view/BuildingTemplate.vue';

export default {
  components: {
    BuildingTemplate,
  },
  data() {
    return {
      building: {
        fullname: 'De Penta (KWE.P)',
        shortname: 'De Penta',
        pricetoday: 193.56,
        priceweek: 1520.42,
        pricemonth: 3264.14,
        realtime: '102kw',
      },
    };
  },
};
</script>

<template>
  <div>
    <BuildingTemplate
      :fullname="building.fullname"
      :shortname="building.shortname"
      :pricetoday="building.pricetoday"
      :priceweek="building.priceweek"
      :pricemonth="building.pricemonth"
      :realtime="building.realtime"
    />
  </div>
</template>


