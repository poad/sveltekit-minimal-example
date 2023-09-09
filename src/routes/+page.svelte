<script lang="ts">
  import { counter, decrement, increment } from '../store/counter';
</script>

<button on:click={() => decrement()}>-</button>
<input type="number" bind:value={$counter} />
<button on:click={() => increment()}>+</button>
