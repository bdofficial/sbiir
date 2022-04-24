function replace_attr(elem, attr, oldValue, newValue) {
    var elems = document.getElementsByTagName(elem),
      re = new RegExp(oldValue);
    for (var i = 0; i < elems.length; i++) {
      if (elems[i][attr].match(re)) {
        elems[i][attr] = elems[i][attr].replace(oldValue, newValue);
      }
    }
  }
  replace_attr("form","name","123","sabbir");