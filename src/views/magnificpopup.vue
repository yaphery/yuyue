<template>
  <div id="magnificpopup">
    <a class="test-popup-link" href="path-to-image.jpg">Open popup</a>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    $(".test-popup-link").magnificPopup({
      type: "image",
      // other options
    });
  },
};
</script>
