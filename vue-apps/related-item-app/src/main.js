import { h, createApp } from 'vue';
import singleSpaVue from 'single-spa-vue';
import axiosPlugin from './plugins/axiosPlugin';
import App from './App.vue';

console.log(process.env.API)


const axiosOptions = {
  baseUrl: 'http://localhost:5000',
  token: ''
}

const app = createApp({})
app.use(axiosPlugin, axiosOptions)

const vueLifecycles = singleSpaVue({
  app,
  appOptions: {
    render() {
      return h(App, {
        // single-spa props are available on the "this" object. Forward them to your component as needed.
        // https://single-spa.js.org/docs/building-applications#lifecycle-props
        // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
        /*
        name: this.name,
        mountParcel: this.mountParcel,
        singleSpa: this.singleSpa,
        */
      });
    },
  },
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
