<i18n>
{
  "en": {
    "alertText": "Are you sure you want to logout from the Twitch integration?"
  },
  "ja": {
    "alertText": "Twitch連携をログアウトしてもよろしいですか？"
  }
}
</i18n>

<template>
  <div>
    <div>{{ $t('alertText') }}</div>
    <br>
    <div :style="{ float: 'right' }">
      <v-btn @click="$emit('confirm')">
        {{ $t('ok') }}
      </v-btn>
      <v-btn @click="$emit('dismiss')">
        {{ $t('cancel') }}
      </v-btn>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class extends Vue {}
</script>
