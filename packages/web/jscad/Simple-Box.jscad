// *** This file was created using the "Export to JSCAD" SolidWorks macro created by Travis Bee ***
// title 	: Simple Box
// author	: Travis
// file  	: Simple-Box.jscad

function getParameterDefinitions () {
  return [
    { name: 'length', caption: 'Length (22 - 210):', type: 'float', initial: 100, step: 1 },
    { name: 'width', caption: 'Width (22 - 100):', type: 'float', initial: 75, step: 1 },
    { name: 'height', caption: 'Height (15 - 240):', type: 'float', initial: 50, step: 1 },
    { name: 'lidThickness', caption: 'Lid Thickness (3 - 10):', type: 'float', initial: 5, step: 1 },
    { name: 'closed', caption: 'Configuration:', type: 'choice', values: [0, 1], captions: ['Open (for printing)', 'Closed'], initial: 0 },
  ];
}

function main (params) {
  //Set bounds on input parameters
  var length = params.length;
  var width = params.width;
  var height = params.height;
  var lidThickness = params.lidThickness;
  var closed = params.closed;
  
  if (length < 22) {length = 22}
  if (length > 210) {length = 210}
  if (width < 22) {width = 22}
  if (width > 100) {width = 100}
  if (height < 15) {height = 15}
  if (height > 240) {height = 240}
  if (lidThickness < 3) {lidThickness = 3}
  if (lidThickness > 10) {lidThickness = 10}
    
  //Feature1 - Boss-Extrude1
  var x1 = length / 2;
  var y1 = width / 2;
  var z1 = height - lidThickness;
  let path1_1 = new CSG.Path2D([[-x1,y1],[x1,y1]],false);
  path = path1_1;
  let path1_2 = new CSG.Path2D([[x1,y1],[x1,-y1]],false);
  path = path.concat(path1_2);
  let path1_3 = new CSG.Path2D([[x1,-y1],[-x1,-y1]],false);
  path = path.concat(path1_3);
  let path1_4 = new CSG.Path2D([[-x1,-y1],[-x1,y1]],false);
  path = path.concat(path1_4);
  path = path.close();
  shape = path.innerToCAG();
  feature1 = linear_extrude({height: z1}, shape).translate([0,0,0]);
  var matrix1_2 = new CSG.Matrix4x4([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
  feature1 = feature1.transform(matrix1_2);

  //Feature2 - Cut-Extrude1
  var x2 = x1 - 5;
  var y2 = y1 - 5;
  var z2 = z1 - 5;
  feature1.properties.featConnector1 = new CSG.Connector([0, 0, z1], [0, 0, 1], [1, 0, 0]);
  let path2_1 = new CSG.Path2D.arc({
    center: [-x2,y2,0],
    radius: 5,
    startangle: 270,
    endangle: 360,
    resolution: 16,
  });
  path = path2_1;
  let path2_2 = new CSG.Path2D([[-(x2 - 5),y2],[(x2 - 5),y2]],false);
  path = path.concat(path2_2);
  let path2_3 = new CSG.Path2D.arc({
    center: [x2,y2,0],
    radius: 5,
    startangle: 180,
    endangle: 270,
    resolution: 16,
  });
  path = path.concat(path2_3);
  let path2_4 = new CSG.Path2D([[x2,(y2 - 5)],[x2,-(y2 - 5)]],false);
  path = path.concat(path2_4);
  let path2_5 = new CSG.Path2D.arc({
    center: [x2,-y2,0],
    radius: 5,
    startangle: 90,
    endangle: 180,
    resolution: 16,
  });
  path = path.concat(path2_5);
  let path2_6 = new CSG.Path2D([[(x2 - 5),-y2],[-(x2 - 5),-y2]],false);
  path = path.concat(path2_6);
  let path2_7 = new CSG.Path2D.arc({
    center: [-x2,-y2,0],
    radius: 5,
    startangle: 0,
    endangle: 90,
    resolution: 16,
  });
  path = path.concat(path2_7);
  let path2_8 = new CSG.Path2D([[-x2,-(y2 - 5)],[-x2,(y2 - 5)]],false);
  path = path.concat(path2_8);
  path = path.close();
  shape = path.innerToCAG();
  feature2 = linear_extrude({height: z2}, shape).translate([0,0,0]);
  feature2 = mirror([0,0,1], feature2);
  feature2.properties.featConnector1  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature3 - Cut-Extrude2
  feature1.properties.featConnector2 = new CSG.Connector([0, 0, z1], [0, 0, 1], [1, 0, 0]);
  shape = circle({r: 0.999999999999998, center: true});
  shape = translate([-x2, -y2, 0], shape);
  feature3 = linear_extrude({height: 12}, shape).translate([0,0,0]);
  feature3 = mirror([0,0,1], feature3);
  feature3.properties.featConnector2  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature4 - Cut-Extrude3
  feature1.properties.featConnector3 = new CSG.Connector([0, 0, z1], [0, 0, 1], [1, 0, 0]);
  shape = circle({r: 0.999999999999998, center: true});
  shape = translate([-x2, y2, 0], shape);
  feature4 = linear_extrude({height: 12}, shape).translate([0,0,0]);
  feature4 = mirror([0,0,1], feature4);
  feature4.properties.featConnector3  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature5 - Cut-Extrude4
  feature1.properties.featConnector4 = new CSG.Connector([0, 0, z1], [0, 0, 1], [1, 0, 0]);
  shape = circle({r: 0.999999999999998, center: true});
  shape = translate([x2, y2, 0], shape);
  feature5 = linear_extrude({height: 12}, shape).translate([0,0,0]);
  feature5 = mirror([0,0,1], feature5);
  feature5.properties.featConnector4  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature6 - Cut-Extrude5
  feature1.properties.featConnector5 = new CSG.Connector([0, 0, z1], [0, 0, 1], [1, 0, 0]);
  shape = circle({r: 0.999999999999998, center: true});
  shape = translate([x2, -y2, 0], shape);
  feature6 = linear_extrude({height: 12}, shape).translate([0,0,0]);
  feature6 = mirror([0,0,1], feature6);
  feature6.properties.featConnector5  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature7 - Boss-Extrude9
  var z7 = lidThickness;
  feature1.properties.featConnector6A = new CSG.Connector([0, 0, z1 + 0.1], [0, 0, 1], [1, 0, 0]); //Lid closed config
  feature1.properties.featConnector6B = new CSG.Connector([0, -width - 10, lidThickness], [0, 0, -1], [1, 0, 0]); //Lid open config
  let path7_1 = new CSG.Path2D([[-x1,y1],[-x1,-y1]],false);
  path = path7_1;
  let path7_2 = new CSG.Path2D([[-x1,-y1],[x1,-y1]],false);
  path = path.concat(path7_2);
  let path7_3 = new CSG.Path2D([[x1,-y1],[x1,y1]],false);
  path = path.concat(path7_3);
  let path7_4 = new CSG.Path2D([[x1,y1],[-x1,y1]],false);
  path = path.concat(path7_4);
  path = path.close();
  shape = path.innerToCAG();
  feature7 = linear_extrude({height: z7}, shape).translate([0,0,0]);
  feature7.properties.featConnector6  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature8 - Cut-Extrude6
  feature7.properties.featConnector7 = new CSG.Connector([0, 0, z7], [0, 0, 1], [1, 0, 0]);
  shape = circle({r: 1.5, center: true});
  shape = translate([-x2, -y2, 0], shape);
  feature8 = linear_extrude({height: z7}, shape).translate([0,0,0]);
  feature8 = mirror([0,0,1], feature8);
  feature8.properties.featConnector7  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature9 - Cut-Extrude7
  feature7.properties.featConnector8 = new CSG.Connector([0, 0, z7], [0, 0, 1], [1, 0, 0]);
  shape = circle({r: 1.5, center: true});
  shape = translate([-x2, y2, 0], shape);
  feature9 = linear_extrude({height: z7}, shape).translate([0,0,0]);
  feature9 = mirror([0,0,1], feature9);
  feature9.properties.featConnector8  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature10 - Cut-Extrude8
  feature7.properties.featConnector9 = new CSG.Connector([0, 0, z7], [0, 0, 1], [1, 0, 0]);
  shape = circle({r: 1.5, center: true});
  shape = translate([x2, y2, 0], shape);
  feature10 = linear_extrude({height: z7}, shape).translate([0,0,0]);
  feature10 = mirror([0,0,1], feature10);
  feature10.properties.featConnector9  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature11 - Cut-Extrude9
  feature7.properties.featConnector10 = new CSG.Connector([0, 0, z7], [0, 0, 1], [1, 0, 0]);
  shape = circle({r: 1.5, center: true});
  shape = translate([x2, -y2, 0], shape);
  feature11 = linear_extrude({height: z7}, shape).translate([0,0,0]);
  feature11 = mirror([0,0,1], feature11);
  feature11.properties.featConnector10  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Feature12 - Boss-Extrude10
  var x12 = x2 - 0.5;
  var y12 = y2 - 0.5;
  feature7.properties.featConnector11 = new CSG.Connector([0, 0, 0], [0, 0, -1], [-1, 0, 0]);
  let path12_1 = new CSG.Path2D.arc({
    center: [x12,-y12],
    radius: 5.50000000000003,
    startangle: 90,
    endangle: 180,
    resolution: 16,
  });
  path = path12_1;
  let path12_2 = new CSG.Path2D([[(x12 - 5.5),-y12],[-(x12 - 5.5),-y12]],false);
  path = path.concat(path12_2);
  let path12_3 = new CSG.Path2D.arc({
    center: [-x12,-y12],
    radius: 5.5,
    startangle: 0,
    endangle: 90,
    resolution: 16,
  });
  path = path.concat(path12_3);
  let path12_4 = new CSG.Path2D([[-x12,-(y12 - 5.5)],[-x12,(y12 - 5.5)]],false);
  path = path.concat(path12_4);
  let path12_5 = new CSG.Path2D.arc({
    center: [-x12,y12],
    radius: 5.5,
    startangle: 270,
    endangle: 360,
    resolution: 16,
  });
  path = path.concat(path12_5);
  let path12_6 = new CSG.Path2D([[-(x12 - 5.5),y12],[(x12 - 5.5),y12]],false);
  path = path.concat(path12_6);
  let path12_7 = new CSG.Path2D.arc({
    center: [x12,y12],
    radius: 5.5,
    startangle: 180,
    endangle: 270,
    resolution: 16,
  });
  path = path.concat(path12_7);
  let path12_8 = new CSG.Path2D([[x12,(y12 - 5.5)],[x12,-(y12 - 5.5)]],false);
  path = path.concat(path12_8);
  path = path.close();
  shape = path.innerToCAG();
  feature12 = linear_extrude({height: 2}, shape).translate([0,0,0]);
  feature12.properties.featConnector11  = new CSG.Connector([0, 0, 0], [0, 0, 1], [1, 0, 0]);

  //Connector1
  feature2 = feature2.connectTo(
    feature2.properties.featConnector1,
    feature1.properties.featConnector1,
    false, 0
  );

  //Connector2
  feature3 = feature3.connectTo(
    feature3.properties.featConnector2,
    feature1.properties.featConnector2,
    false, 0
  );

  //Connector3
  feature4 = feature4.connectTo(
    feature4.properties.featConnector3,
    feature1.properties.featConnector3,
    false, 0
  );

  //Connector4
  feature5 = feature5.connectTo(
    feature5.properties.featConnector4,
    feature1.properties.featConnector4,
    false, 0
  );

  //Connector5
  feature6 = feature6.connectTo(
    feature6.properties.featConnector5,
    feature1.properties.featConnector5,
    false, 0
  );

  if (closed == 1) {
    //Connector6A
    feature7 = feature7.connectTo(
      feature7.properties.featConnector6,
      feature1.properties.featConnector6A,
      false, 0
    );
  } else {
    //Connector6B
    feature7 = feature7.connectTo(
      feature7.properties.featConnector6,
      feature1.properties.featConnector6B,
      false, 0
    );
  }
  
  //Connector7
  feature8 = feature8.connectTo(
    feature8.properties.featConnector7,
    feature7.properties.featConnector7,
    false, 0
  );

  //Connector8
  feature9 = feature9.connectTo(
    feature9.properties.featConnector8,
    feature7.properties.featConnector8,
    false, 0
  );

  //Connector9
  feature10 = feature10.connectTo(
    feature10.properties.featConnector9,
    feature7.properties.featConnector9,
    false, 0
  );

  //Connector10
  feature11 = feature11.connectTo(
    feature11.properties.featConnector10,
    feature7.properties.featConnector10,
    false, 0
  );

  //Connector11
  feature12 = feature12.connectTo(
    feature12.properties.featConnector11,
    feature7.properties.featConnector11,
    false, 0
  );

  body = feature1;
  body = difference(body, feature2);
  body = difference(body, feature3);
  body = difference(body, feature4);
  body = difference(body, feature5);
  body = difference(body, feature6);
  body = union(body, feature7);
  body = difference(body, feature8);
  body = difference(body, feature9);
  body = difference(body, feature10);
  body = difference(body, feature11);
  body = union(body, feature12);
  
  //Center the model in the open config
  if (closed == 0) {
      body = translate([0, width / 2 + 5, 0], body);
  }

  return body;
}