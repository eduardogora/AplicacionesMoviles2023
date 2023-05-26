<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Monitoreo de Usuario</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col>
            <div>Nombre</div>
          </ion-col>
          <ion-col>
            <div>Apellido</div>
          </ion-col>
          <ion-col>
            <div>Carrera</div>
          </ion-col>
          <ion-col>
            <div>Semestre</div>
          </ion-col>
        </ion-row>
        <ion-row v-for="(item, index) in listaClaves" :key="index">
          <ion-col>
            <div>{{item.nombre}}</div>
          </ion-col>
          <ion-col>
            <div>{{item.apellidos}}</div>
          </ion-col>
          <ion-col>
            <div>{{item.carrera}}</div>
          </ion-col>
          <ion-col>
            <div>{{item.semestre}}</div>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonGrid,
  IonRow,
} from "@ionic/vue";
import { getDatabase, ref, onValue } from "firebase/database";
export default {
  name: "Tab1",
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonPage,
    IonCol,
    IonGrid,
    IonRow,
  },
  mounted() {
    const db = getDatabase();
    const starCountRef = ref(db, "usuario/");
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      var cont = 0;
      snapshot.forEach((element) => {
        this.listaKeys[cont] = element.key;
        this.listaClaves[cont] = element.toJSON();
        cont++;
      });
    });
    console.log("lista de claves", this.listaClaves);
  },
  data() {
    return {
      listaClaves: [{ nombre: "", usuario: "" }],
      listaKeys: [],
    };
  },
};
</script>


<style>
ion-col > div {
  background-color: #f23333;
  border: solid 1px #ddd;
  padding: 10px;
  text-align: center;
}
</style>
