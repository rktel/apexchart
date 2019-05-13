<template>
  <VApp :dark="dark">
    <VToolbar color="primary">
      <VSpacer/>
      <VBtn color="success" @click="changeColor">COlor</VBtn>
    </VToolbar>
    <VContent>
      <vContainer grid-list-xl fill-height>
        <VLayout row wrap class="primary">
          <VFlex lg6 xs12 class="error">
            <VCard>
              <apexchart type="bar" :options="options" :series="series"></apexchart>
            </VCard>
          </VFlex>
          <VFlex lg6 xs12>
            <VCard>
              <apexchart type="bar" :options="options" :series="series"></apexchart>
            </VCard>
          </VFlex>
        </VLayout>
      </vContainer>
    </VContent>
  </VApp>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { Session } from "meteor/session";

export default {
  components: {
    apexchart: VueApexCharts
  },
  mounted() {
    Session.set("dark", false);
  },
  meteor: {
    dark() {
      return Session.get("dark");
    }
  },
  methods: {
    changeColor() {

      Session.set("dark", !Session.get("dark"));
      console.log("this", this.options.theme.mode)
      if(Session.get("dark")){
        this.options = {
          theme:{
            mode: "dark"
          }
        }
      }else{
        this.options= {
          theme:{
            mode: "light"
          }
        }
      }
    }
  },
  data: function() {
    return {
      options: {
        theme: {
          mode: "light"
        },
        chart: {
          id: "vuechart-day",
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    };
  }
};
</script>

<style>
</style>
