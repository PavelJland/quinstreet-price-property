<template lang="pug">
.input-group.input-group-sm
  .input-group-prepend
    span#inputGroup-sizing-sm.input-group-text {{label}}
  input.form-control(
    type='text',
    :value='value')
</template>

<script>
export default {
  props: ['label', 'value'],
};
</script>
