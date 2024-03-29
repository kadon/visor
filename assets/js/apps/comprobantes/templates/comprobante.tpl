<div class="thumbnail">
  <span class="label label-success bm"> <div class="crop"> <%= tipoDeComprobante %> </div> </span>
  <div class="device-actions">
    <ul class="options" />
  </div>
  <img class="device" alt="Smiley face" src="assets/img/xml.jpg"/>
  <div class="caption">
    <strong class="description"> <div class="crop"> <%= serie %><%= folio %> </div> </strong>
    <div class="device-label">
      <h6><div class="crop">Pago: <%= metodoDePago %> </div> </h6>
    </div>
    <div class="device-label">
      <h6> <div class="crop">Subtotal: $<%= subtotal %> </div> </h6>
    </div>
    <div class="device-label">
      <h6> <div class="crop">Total: $<%= total %> </div>  </h6>
    </div>
  </div>
</div>

