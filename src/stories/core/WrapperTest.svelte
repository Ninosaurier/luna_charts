<script>
	import Header from "../../components/Header.svelte";
import Wrapper from "../../core/Wrapper.svelte";
</script>

<Wrapper dimension={{ viewBox: { minX: 0, minY: 0, width: 300, height: 150 } }} >
  <Header chartInfo={{
    title: "Hello", 
    desc: "Lorem Ipsum dolor sit amet consectetur adipiscing elit"
  }}></Header>
</Wrapper>