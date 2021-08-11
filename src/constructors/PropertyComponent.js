import {uuid} from "vue-uuid";

function PropertyComponent(componentName) {
    this.name = componentName
    this.refName = uuid.v1()
}

PropertyComponent.prototype.text = function(parent) {
    let component = parent.$refs[this.refName]
    return component.text
}

PropertyComponent.prototype.obj = function(parent) {
    let component = parent.$refs[this.refName]
    return component.PropertyGetterObject.obj()
}

function fromNames(...names) {
    return names.map(name => new PropertyComponent(name))
}

const propertyComponentAPI = {
    fromNames
}

export default propertyComponentAPI