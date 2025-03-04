<script setup lang="ts">
import { toast } from "vue3-toastify"

const config = useRuntimeConfig()

const formData = ref({
  name: '',
  socialNetworkOrEmail: '',
  phone: '',
  budget: '',
  comment: ''
});

let valid = ref(false);

let form: any = ref(null);
let submitCount = ref(0)

const handleSubmit = async () => {
  if (form.value.validate()) {
    submitCount.value += 1;
    if (submitCount.value > 1) return;

    let toSend = formData.value;
    try {
      let response = await fetch("https://api.formtomail.ru/send", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          to: ["grishadzyin@gmail.com"], // Куда приходит
          title: "Заказ на разработку сайта", // Заголовок письма
          body: {   // Содержимое формы (можно прислать HTML)
            "Имя": toSend.name,
            "tg или email": toSend.socialNetworkOrEmail,
            "Телефон": toSend.phone,
            "Бюджет": toSend.budget,
            "Комментарий": toSend.comment,
          },
          apiKey: config.public.formToMailApiKey,
        })
      });

      let body = await response.json();
      
      if (body.statusCode == 200) {
        toast("Заявка отправлена!", { type: "success" })
      } else {
        toast("Ошибка при отправлении! Обратитесь в поддержку!", { type: "error" })
      }
    } catch (error) {
      toast("Ошибка при отправлении! Обратитесь в поддержку!", { type: "error" })
    }    
  }
};
</script>
<template>
  <v-row style="margin-top: 100px;">
    <v-col cols="12" class="d-flex flex-column d-lg-none">
      <h2>
        Форма обратной связи: <br />
        получите бесплатную <br />
        консультацию
      </h2>
      <div class="my-5">
        <h3>
          Заполните форму, и мы свяжемся с вами в 
          ближайшее время.
        </h3>
        <p class="d-none d-md-block">
          Оставьте свои контактные данные, и наш специалист <br />
          проконсультирует вас по всем вопросам.
        </p>
      </div>
      <div class="my-5 d-none d-md-block">
        <h3>Узнайте, как мы можем помочь вашему бизнесу!</h3>
        <p>
          Мы предлагаем индивидуальные решения <br />
          для каждого клиента.
        </p>
      </div>
    </v-col>

    <v-col cols="12" lg="6"> 
      <div class="card">
        <v-form v-model="valid" ref="form">
          <v-col cols="12">
            <h2 class="text-center">Заказать сайт</h2>
          </v-col>
          <v-col cols="12">
            <v-text-field
              v-model="formData.name"
              :rules="[v => !!v || 'Имя обязательно']"
              label="Имя"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="formData.socialNetworkOrEmail"
              :rules="[v => !!v || 'Контакты обязательны']"
              label="Telegram/почта"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="formData.phone"
              :rules="[v => !!v || 'Номер телефона обязателен']"
              label="Номер телефона"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field
              v-model="formData.budget"
              :rules="[v => !!v || 'Бюджет обязателен']"
              label="Бюджет"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              v-model="formData.comment"
              label="Комментарий"
              variant="outlined"
            ></v-textarea>
          </v-col>

          <v-col cols="12">
            <v-btn
              class="buy-btn"
              color="primary"
              size="x-large"
              style="width: 100%;"
              :disabled="!valid"
              @click="handleSubmit"
            >
              заказать
            </v-btn>
          </v-col>
        </v-form>
        <!-- <v-row style="color: white;">
          <v-col cols="12">
            <h2 class="text-center">Заказать сайт</h2>
          </v-col>

          <v-col cols="12">
            <v-text-field variant="outlined" label="Имя"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field variant="outlined" label="Электронная почта"></v-text-field>
          </v-col>
          
          <v-col cols="12">
            <v-text-field variant="outlined" label="Контактный телефон"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-text-field variant="outlined" label="Бюджет"></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea variant="outlined" label="Комментарий"></v-textarea>
          </v-col>
          
          <v-col cols="12">
            <v-btn class="buy-btn" color="primary" size="x-large" style="width: 100%;"> заказать </v-btn>
          </v-col>
        </v-row> -->
      </div>
    </v-col>
    <v-col cols="12" lg="6" class="d-none d-lg-flex">
      <div class="back">
        <h2>
          Форма обратной связи: <br />
          получите бесплатную <br />
          консультацию
        </h2>
        <div class="inf">
          <h4>
            Заполните форму, и мы с вами свяжемся в <br />
            ближайшее время.
          </h4>
          <div class="inf-item">
            <v-icon class="inf-item-icon">mdi-account-tie</v-icon>
            <p>
              Оставьте свои контактные данные, и наш специалист <br />
              проконсультирует вас по всем вопросам.
            </p>
          </div>
        </div>
        <div class="inf">
          <h4>Узнайте, как мы можем помочь вашему бизнесу!</h4>
          <div class="inf-item">
            <v-icon class="inf-item-icon">mdi-account-heart-outline</v-icon>
            <p>
              Мы предлагаем индивидуальные решения <br />
              для каждого клиента.
            </p>
          </div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>
<style scoped lang="scss">
.inf {
  padding-top: 59px;
  h4 {
    padding-bottom: 19px;
    font-size: 24px;
  }
  p {
    font-size: 20px;
  }
}
.card {
  background-color: black;
  border-radius: 30px;
  padding: 30px;
}
.inf-item {
  display: flex;
  align-items: center;
}
.inf-item-icon {
  font-size: 40px;
  margin-right: 25px;
}
</style>
