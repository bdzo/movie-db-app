<template>
    <button 
      class="btn-primary mtb-20" 
      @click="buttonEvent"
    >
      {{ title }}
    </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    title: String,
    method: { 
      type: Function 
    }
  },

  methods: {
    buttonEvent() {
      this.$emit('method')
    }
    
  }
}
</script>