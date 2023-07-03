const broker = require('./adapters/broker')

async function run() {
  const view = await (await broker).subscribe('viewSubscription')

  view.on('message', (message, content, ackOrNack) => {
    const parsedContent = Buffer.isBuffer(content)
      ? Buffer.from(content).toString()
      : content
    console.log(parsedContent)
    ackOrNack()
  })

  console.log('Viewer started')
}

run().catch(err => console.error(err))
