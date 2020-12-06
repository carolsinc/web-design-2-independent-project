const tokenID =
  "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IlJVTVk3MjZWVEEifQ.eyJpc3MiOiIzSzlXNjRMRDUzIiwiaWF0IjoxNjA1NTU0MjcwLCJleHAiOjE2MTIxMzc2MDB9.xInxfSfEPFp_5Ka0RaGqXEA8Zs4Uavfz7mjCBDLSsZL7-GPx4oUeB_B8MGycmtKsrBN5_RcODwnHqYBWPU-cHQ";

mapkit.init({
  authorizationCallback: function (done) {
    done(tokenID);
  },
});

var louisPizza = new mapkit.CoordinateRegion(
  new mapkit.Coordinate(45.4314092, -75.662409),
  new mapkit.CoordinateSpan(0.0016, 0.0016)
);
var map = new mapkit.Map("map");
map.region = louisPizza;
