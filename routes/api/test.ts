export default eventHandler(async (event) => {
  return process.env.SUPABASE_STORAGE_BUCKET
})
