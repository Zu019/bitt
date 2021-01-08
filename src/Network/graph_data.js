import grpc from 'grpc'
import protoLoader from '@grpc/proto-loader'

const PROTO_PATH = "metagraph.proto";
    var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
        keepCase: true,
        longs: String,
        enums: String,
        arrays: true
    });

    const metagraph_proto = grpc.loadPackageDefinition(packageDefinition).metagraph;
    const client = new metagraph_proto.Metagraph( 
        "206.189.254.5:8080",
        grpc.credentials.createInsecure()
    );
    var _nodes = []
    var _links = []
    console.log('RPC:')
    client.GetGraph({}, function(err, message){
        if (err) {
            console.log('err');
            } else {
            console.log('success');
            var uids = message.uids;
            var eis = message.eis;
            var ejs = message.ejs;
            var wijs = message.wijs;
            for(var i = 0; i < uids.length; i++) {
                _nodes.push({id: uids[i], color: 1});
            }
            for(var i = 0; i < eis.length; i++) {
                var ei = eis[i];
                var ej = ejs[i];
                var wijs = wijs[i];
                _links.push({source: ei, target: ej, curvature: 0.3, rotation: 0});
            }
        }
    });
    const graph_data = {
        nodes: _nodes,
        links: _links
    };
    console.log(graph_data);

export const graph_data;