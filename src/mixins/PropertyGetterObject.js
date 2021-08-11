export default {
    computed: {
        // must to be a conflicting key
        text() {
            return ""
        }
    },
    data() {
        let self = this;
        return {
            PropertyGetterObject: {
                obj() {
                    return {name: self.$options.name.substring(14), value: self.text}
                }
            }
        }
    }
}