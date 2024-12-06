<script lang="ts">
	import { counter, decrement, increment } from '../store/counter';
</script>

<button onclick={() => decrement()}>-</button>
<input type="number" bind:value={$counter} />
<button onclick={() => increment()}>+</button>
