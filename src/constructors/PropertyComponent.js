import {uuid} from "vue-uuid";

function PropertyComponent(componentName) {
    this.name = componentName
    this.refName = uuid.v1()
}

PropertyComponent.prototype.text = function(parent) {
    // return this.refName
    let component = parent.$refs[this.refName]
    return component.text
}

function fromNames(...names) {
    return names.map(name => new PropertyComponent(name))
}

const propertyComponentAPI = {
    fromNames
}

export default propertyComponentAPI