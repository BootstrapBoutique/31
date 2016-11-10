$(document).ready(function() {
  var wrapper = $("#wrapper_id");
  var add_btn = $("#add_field_button");

  var extra_field = `
    <div class="row">
      <div class="col-md-4">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-btn">
              <button class="btn btn-danger" type="button">x</button>
            </div>
            <input class="form-control" name="extra_field[]" type="text">
          </div>
        </div>
      </div>
    </div>
  `;

  $(add_btn).click(function(e){
    e.preventDefault();
    $(wrapper).append(extra_field);
  });

  $(wrapper).on("click", ".btn-danger", function(e){
    e.preventDefault();
    $(this).closest('.row').remove();
  });
});
