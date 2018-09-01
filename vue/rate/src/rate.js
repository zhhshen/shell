const rateTemplate = `
  <div class="rate-wrap">
    <ul>
      <li
        class="rate-item"
        v-for="(item, index) in rates"
        :key="index"
        @touchstart="onSeleted(index)"
        @click="onSeleted(index)">
        <i
          class="icon iconfont icon-star"
          :class="{ 'icon-star-bg': index <= current }"></i>
      </li>
    </ul> 
  </div>
`
Vue.component('rate', {
  name: 'Rate',
  template: rateTemplate,
  props: {
    value: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 5,
    },
  },
  data() {
    return {
      current: this.value - 1,
    }
  },
  computed: {
    rates() {
      return new Array(this.length)
    },
  },
  methods: {
    onSeleted(index) {
      const { current } = this
      if (current !== index) {
        this.current = index
        this.$emit('seleted', this.current + 1)
      }
    },
  },
})