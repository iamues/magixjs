var Button,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Button = (function(_super) {
  __extends(Button, _super);

  function Button(options) {
    Button.__super__.constructor.apply(this, arguments);
  }

  Button.prototype._kind = 'Button';

  Button.prototype._elementType = 'button';

  Button.define('icon', {
    get: function() {
      return this.image;
    },
    set: function(value) {
      this.backgroundColor = 'none';
      this.image = value;
      this.imagePosition = 'center center';
      this.imageSize = '100% 100%';
      this.imageRepeat = false;
      this.padding = 0;
    }
  });

  return Button;

})(Text);

Button.prototype.focus = function() {
  this._element.focus();
};

Button.prototype.resignFocus = function() {
  this._element.blur();
};
