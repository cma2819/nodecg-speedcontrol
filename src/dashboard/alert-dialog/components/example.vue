<i18n>
{
  "en": {
    "alertText": "Example Text"
  },
  "ja": {
    "alertText": "Example Localised Text"
  }
}
</i18n>

<template>
  <div>
    <div>{{ $t('alertText') }}</div>
    <br>
    <div :style="{ float: 'right' }">
      <v-btn @click="confirm">
        {{ $t('ok') }}
      </v-btn>
      <v-btn @click="dismiss">
        {{ $t('cancel') }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {
  confirm(): void {
    // do stuff
    const screwedUp = false;
    if (screwedUp) {
      return; // maybe they screwed something up and we wanna stop them
    }
    this.$emit('confirm');
  }

  dismiss(): void {
    // do other stuff
    this.$emit('dismiss');
  }
}
</script>
