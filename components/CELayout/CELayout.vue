<template>
  <div class="CE__layout">
    <CEHeader />
    <CENavigation />
    <CEContextHelper />
    <CEWrapper />
  </div>
</template>

<script>
import { CEContextHelper } from "../CEContextHelper";
import { CEHeader } from "../CEHeader";
import { CENavigation } from "../CENavigation";
import { CEWrapper } from "../CEWrapper";
export default {
  name: "CELayout",
  components: { CEHeader, CENavigation, CEContextHelper, CEWrapper },
};
</script>

<style></style>
